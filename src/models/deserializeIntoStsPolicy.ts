import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {deserializeIntoPolicyBase} from './deserializeIntoPolicyBase';
import {DirectoryObject} from './directoryObject';
import {serializeDirectoryObject} from './serializeDirectoryObject';
import {StsPolicy} from './stsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStsPolicy(stsPolicy: StsPolicy | undefined = {} as StsPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPolicyBase(stsPolicy),
        "appliesTo": n => { stsPolicy.appliesTo = n.getCollectionOfObjectValues<DirectoryObject>(createDirectoryObjectFromDiscriminatorValue); },
        "definition": n => { stsPolicy.definition = n.getCollectionOfPrimitiveValues<string>(); },
        "isOrganizationDefault": n => { stsPolicy.isOrganizationDefault = n.getBooleanValue(); },
    }
}
