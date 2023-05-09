import {ResultInfo} from './resultInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeResultInfo(writer: SerializationWriter, resultInfo: ResultInfo | undefined = {} as ResultInfo) : void {
        writer.writeNumberValue("code", resultInfo.code);
        writer.writeStringValue("message", resultInfo.message);
        writer.writeStringValue("@odata.type", resultInfo.odataType);
        writer.writeNumberValue("subcode", resultInfo.subcode);
        writer.writeAdditionalData(resultInfo.additionalData);
}
