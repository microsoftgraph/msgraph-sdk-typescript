import {deserializeIntoDirectoryObject} from './deserializeIntoDirectoryObject';
import {PolicyBase} from './policyBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPolicyBase(policyBase: PolicyBase | undefined = {} as PolicyBase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDirectoryObject(policyBase),
        "description": n => { policyBase.description = n.getStringValue(); },
        "displayName": n => { policyBase.displayName = n.getStringValue(); },
    }
}
