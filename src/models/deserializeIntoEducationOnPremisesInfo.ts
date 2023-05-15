import {EducationOnPremisesInfo} from './educationOnPremisesInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEducationOnPremisesInfo(educationOnPremisesInfo: EducationOnPremisesInfo | undefined = {} as EducationOnPremisesInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "immutableId": n => { educationOnPremisesInfo.immutableId = n.getStringValue(); },
        "@odata.type": n => { educationOnPremisesInfo.odataType = n.getStringValue(); },
    }
}
