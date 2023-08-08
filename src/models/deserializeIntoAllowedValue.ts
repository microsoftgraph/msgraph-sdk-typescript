import type {AllowedValue} from './allowedValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAllowedValue(allowedValue: AllowedValue | undefined = {} as AllowedValue) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(allowedValue),
        "isActive": n => { allowedValue.isActive = n.getBooleanValue(); },
    }
}
