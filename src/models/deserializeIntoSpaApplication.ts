import { type SpaApplication } from './spaApplication';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSpaApplication(spaApplication: SpaApplication | undefined = {} as SpaApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { spaApplication.odataType = n.getStringValue(); },
        "redirectUris": n => { spaApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
