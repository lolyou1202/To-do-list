import { useCallback, useEffect, useState } from "react";
import { AvailableActions } from "../types/types";

export const useFillActions = (actions: AvailableActions[]) => {
    const [IdPickedActions, setIdPickedPersons] = useState<number[]>([]);

    const callback = useCallback(() => {
        setIdPickedPersons(
            actions.filter((item) => item.picked).map((item) => item.id)
        );
    }, [actions]);

    useEffect(() => {
        callback();
    }, [callback]);

    return IdPickedActions;
}