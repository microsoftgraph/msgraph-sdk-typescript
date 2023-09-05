import { type ResultInfo } from './resultInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoResultInfo(resultInfo: ResultInfo | undefined = {} as ResultInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { resultInfo.code = n.getNumberValue(); },
        "message": n => { resultInfo.message = n.getStringValue(); },
        "@odata.type": n => { resultInfo.odataType = n.getStringValue(); },
        "subcode": n => { resultInfo.subcode = n.getNumberValue(); },
    }
}
