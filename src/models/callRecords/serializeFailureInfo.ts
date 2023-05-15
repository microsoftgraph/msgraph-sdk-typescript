import {FailureInfo} from './failureInfo';
import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFailureInfo(writer: SerializationWriter, failureInfo: FailureInfo | undefined = {} as FailureInfo) : void {
        writer.writeStringValue("@odata.type", failureInfo.odataType);
        writer.writeStringValue("reason", failureInfo.reason);
        writer.writeEnumValue<FailureStage>("stage", failureInfo.stage);
        writer.writeAdditionalData(failureInfo.additionalData);
}
