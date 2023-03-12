import { useCallback, useEffect, useState } from "react";
import { person } from "../@types/types";

export const useFillPersons = (persons: person[]) => {
    const [IdPickedPersons, setIdPickedPersons] = useState<number[]>([]);

    const callback = useCallback(() => {
        setIdPickedPersons(
            persons.filter((item) => item.picked).map((item) => item.id)
        );
    }, [persons]);

    useEffect(() => {
        callback();
    }, [callback]);

    return IdPickedPersons;
};
