import {DirectoryObject} from './directoryObject';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {serializePolicyBase} from './serializePolicyBase';
import {StsPolicy} from './stsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeStsPolicy(writer: SerializationWriter, stsPolicy: StsPolicy | undefined = {} as StsPolicy) : void {
        serializePolicyBase(writer, stsPolicy)
        writer.writeCollectionOfObjectValues<DirectoryObject>("appliesTo", stsPolicy.appliesTo, serializeDirectoryObject);
        writer.writeCollectionOfPrimitiveValues<string>("definition", stsPolicy.definition);
        writer.writeBooleanValue("isOrganizationDefault", stsPolicy.isOrganizationDefault);
}
