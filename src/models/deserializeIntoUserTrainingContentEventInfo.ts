import {UserTrainingContentEventInfo} from './userTrainingContentEventInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingContentEventInfo(userTrainingContentEventInfo: UserTrainingContentEventInfo | undefined = {} as UserTrainingContentEventInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "browser": n => { userTrainingContentEventInfo.browser = n.getStringValue(); },
        "contentDateTime": n => { userTrainingContentEventInfo.contentDateTime = n.getDateValue(); },
        "ipAddress": n => { userTrainingContentEventInfo.ipAddress = n.getStringValue(); },
        "@odata.type": n => { userTrainingContentEventInfo.odataType = n.getStringValue(); },
        "osPlatformDeviceDetails": n => { userTrainingContentEventInfo.osPlatformDeviceDetails = n.getStringValue(); },
        "potentialScoreImpact": n => { userTrainingContentEventInfo.potentialScoreImpact = n.getNumberValue(); },
    }
}
