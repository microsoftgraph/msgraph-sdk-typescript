import {PolicyBase} from './policyBase';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePolicyBase(writer: SerializationWriter, policyBase: PolicyBase | undefined = {} as PolicyBase) : void {
        serializeDirectoryObject(writer, policyBase)
        writer.writeStringValue("description", policyBase.description);
        writer.writeStringValue("displayName", policyBase.displayName);
}
