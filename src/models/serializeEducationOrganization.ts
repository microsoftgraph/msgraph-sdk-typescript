import {EducationExternalSource} from './educationExternalSource';
import type {EducationOrganization} from './educationOrganization';
import {serializeEntity} from './serializeEntity';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEducationOrganization(writer: SerializationWriter, educationOrganization: EducationOrganization | undefined = {} as EducationOrganization) : void {
        serializeEntity(writer, educationOrganization)
        writer.writeStringValue("description", educationOrganization.description);
        writer.writeStringValue("displayName", educationOrganization.displayName);
        writer.writeEnumValue<EducationExternalSource>("externalSource", educationOrganization.externalSource);
        writer.writeStringValue("externalSourceDetail", educationOrganization.externalSourceDetail);
}
