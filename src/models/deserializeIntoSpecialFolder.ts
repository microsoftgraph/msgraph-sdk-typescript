import {SpecialFolder} from './specialFolder';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSpecialFolder(specialFolder: SpecialFolder | undefined = {} as SpecialFolder) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { specialFolder.name = n.getStringValue(); },
        "@odata.type": n => { specialFolder.odataType = n.getStringValue(); },
    }
}
