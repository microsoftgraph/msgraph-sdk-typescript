import { type EducationResource } from './educationResource';
import { type IdentitySet } from './identitySet';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeEducationResource(writer: SerializationWriter, educationResource: EducationResource | undefined = {} as EducationResource) : void {
        writer.writeStringValue("displayName", educationResource.displayName);
        writer.writeStringValue("@odata.type", educationResource.odataType);
        writer.writeAdditionalData(educationResource.additionalData);
}
