import { type DetailsInfo } from './detailsInfo';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDetailsInfo(detailsInfo: DetailsInfo | undefined = {} as DetailsInfo) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { detailsInfo.odataType = n.getStringValue(); },
    }
}
