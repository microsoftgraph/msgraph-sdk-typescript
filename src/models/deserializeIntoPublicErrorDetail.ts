import { type PublicErrorDetail } from './publicErrorDetail';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicErrorDetail(publicErrorDetail: PublicErrorDetail | undefined = {} as PublicErrorDetail) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicErrorDetail.code = n.getStringValue(); },
        "message": n => { publicErrorDetail.message = n.getStringValue(); },
        "@odata.type": n => { publicErrorDetail.odataType = n.getStringValue(); },
        "target": n => { publicErrorDetail.target = n.getStringValue(); },
    }
}
