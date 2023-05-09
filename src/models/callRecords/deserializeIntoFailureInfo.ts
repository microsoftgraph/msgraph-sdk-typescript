import {FailureInfo} from './failureInfo';
import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFailureInfo(failureInfo: FailureInfo | undefined = {} as FailureInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { failureInfo.odataType = n.getStringValue(); },
        "reason": n => { failureInfo.reason = n.getStringValue(); },
        "stage": n => { failureInfo.stage = n.getEnumValue<FailureStage>(FailureStage); },
    }
}
