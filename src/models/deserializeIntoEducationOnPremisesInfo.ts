import { type EducationOnPremisesInfo } from './educationOnPremisesInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOnPremisesInfo(educationOnPremisesInfo: EducationOnPremisesInfo | undefined = {} as EducationOnPremisesInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "immutableId": n => { educationOnPremisesInfo.immutableId = n.getStringValue(); },
        "@odata.type": n => { educationOnPremisesInfo.odataType = n.getStringValue(); },
    }
}
