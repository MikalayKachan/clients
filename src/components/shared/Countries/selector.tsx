
import { COUNTRIES } from "./countries.ts";
import { SelectMenuOption } from "./types";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";

import styles from "./selector.module.css"

export interface CountrySelectorProps {
  id: string;
  open: boolean;
  disabled?: boolean;
  onToggle: () => void;
  onChange: (value: SelectMenuOption["value"]) => void;
  selectedValue: SelectMenuOption;
}

export function CountrySelector({
  id,
  open,
  disabled = false,
  onToggle,
  onChange,
  selectedValue,
}: CountrySelectorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mutableRef = ref as MutableRefObject<HTMLDivElement | null>;

    const handleClickOutside = (event) => {
      if (
        mutableRef.current &&
        !mutableRef.current.contains(event.target) &&
        open
      ) {
        onToggle();
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const [query, setQuery] = useState("");

  return (
    <div ref={ref}>
      <div className={styles.dataItem} >
        <div className={styles.selectedCountry} onClick={onToggle}>
          <img
            alt={`${selectedValue.value}`}
            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedValue.value}.svg`}
            className={styles.flag}
          />
          {selectedValue.title}
        </div>

        <div className={styles.searchPart}>
          {open && (
            <div className={styles.searchWindow}>
              
                <input
                  type="search"
                  name="search"
                  autoComplete={"off"}
                  className={styles.input}
                  placeholder={"Search a country"}
                  onChange={(e) => setQuery(e.target.value)}
                />
              

              <div
                className={styles.list
                }
              >
                {COUNTRIES.filter((country) =>
                  country.title.toLowerCase().startsWith(query.toLowerCase())
                ).length === 0 ? (
                  <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                    No countries found
                  </li>
                ) : (
                  COUNTRIES.filter((country) =>
                    country.title.toLowerCase().startsWith(query.toLowerCase())
                  ).map((value, index) => {
                    return (
                      <li
                        key={`${id}-${index}`}
                        className={styles.li}
                        onClick={() => {
                          onChange(value.value);
                          setQuery("");
                          onToggle();
                        }}
                      >
                        <img
                          alt={`${value.value}`}
                          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                          className={styles.listFlagItem}
                        />

                        <span className={styles.listCountry}>
                          {value.title}
                        </span>

                      </li>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
