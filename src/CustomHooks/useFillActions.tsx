import { useCallback, useEffect, useState } from "react";
import { AvailableActions } from "../@types/types";

export const useFillActions = (actions: AvailableActions[]) => {
    const [IdPickedActions, setIdPickedPersons] = useState<number | undefined>();

    const callback = useCallback(() => {
        setIdPickedPersons(
            actions.find((item) => item.picked)?.id
        );
    }, [actions]);

    useEffect(() => {
        callback();
    }, [callback]);

    return IdPickedActions;
}