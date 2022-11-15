import {TeleconferenceDeviceMediaQualityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeleconferenceDeviceMediaQualityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeleconferenceDeviceMediaQualityCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeleconferenceDeviceMediaQualityCollectionResponse();
}
