import { createDirectoryObjectFromDiscriminatorValue } from './createDirectoryObjectFromDiscriminatorValue';
import { deserializeIntoPolicyBase } from './deserializeIntoPolicyBase';
import { type DirectoryObject } from './directoryObject';
import { serializeDirectoryObject } from './serializeDirectoryObject';
import { type StsPolicy } from './stsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoStsPolicy(stsPolicy: StsPolicy | undefined = {} as StsPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(stsPolicy),
        "appliesTo": n => { stsPolicy.appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "definition": n => { stsPolicy.definition = n.getCollectionOfPrimitiveValues<string>(); },
        "isOrganizationDefault": n => { stsPolicy.isOrganizationDefault = n.getBooleanValue(); },
    }
}
