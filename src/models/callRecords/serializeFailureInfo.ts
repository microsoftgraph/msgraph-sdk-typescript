import {FailureInfo} from './failureInfo';
import {FailureStage} from './failureStage';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFailureInfo(failureInfo: FailureInfo | undefined = {} as FailureInfo, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", failureInfo.odataType);
        writer.writeStringValue("reason", failureInfo.reason);
        writer.writeEnumValue<FailureStage>("stage", failureInfo.stage);
        writer.writeAdditionalData(failureInfo.additionalData);
}
