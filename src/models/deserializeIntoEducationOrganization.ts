import {deserializeIntoEntity} from './deserializeIntoEntity';
import {EducationExternalSource} from './educationExternalSource';
import {EducationOrganization} from './educationOrganization';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOrganization(educationOrganization: EducationOrganization | undefined = {} as EducationOrganization) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(educationOrganization),
        "description": n => { educationOrganization.description = n.getStringValue(); },
        "displayName": n => { educationOrganization.displayName = n.getStringValue(); },
        "externalSource": n => { educationOrganization.externalSource = n.getEnumValue<EducationExternalSource>(EducationExternalSource); },
        "externalSourceDetail": n => { educationOrganization.externalSourceDetail = n.getStringValue(); },
    }
}
