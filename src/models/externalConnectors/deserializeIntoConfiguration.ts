import {Configuration} from './configuration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConfiguration(configuration: Configuration | undefined = {} as Configuration) : Record<string, (node: ParseNode) => void> {
    return {
        "authorizedAppIds": n => { configuration.authorizedAppIds = n.getCollectionOfPrimitiveValues<string>(); },
        "@odata.type": n => { configuration.odataType = n.getStringValue(); },
    }
}
