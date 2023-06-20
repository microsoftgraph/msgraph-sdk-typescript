import {EducationResource} from './educationResource';
import {IdentitySet} from './identitySet';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationResource(educationResource: EducationResource | undefined = {} as EducationResource, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", educationResource.displayName);
        writer.writeStringValue("@odata.type", educationResource.odataType);
        writer.writeAdditionalData(educationResource.additionalData);
}
