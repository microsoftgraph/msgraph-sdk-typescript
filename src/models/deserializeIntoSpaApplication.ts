import type {SpaApplication} from './spaApplication';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSpaApplication(spaApplication: SpaApplication | undefined = {} as SpaApplication) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { spaApplication.odataType = n.getStringValue(); },
        "redirectUris": n => { spaApplication.redirectUris = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
