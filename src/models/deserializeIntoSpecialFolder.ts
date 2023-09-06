import { type SpecialFolder } from './specialFolder';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSpecialFolder(specialFolder: SpecialFolder | undefined = {} as SpecialFolder) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { specialFolder.name = n.getStringValue(); },
        "@odata.type": n => { specialFolder.odataType = n.getStringValue(); },
    }
}
