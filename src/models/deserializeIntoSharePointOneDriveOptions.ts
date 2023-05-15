import {SearchContent} from './searchContent';
import {SharePointOneDriveOptions} from './sharePointOneDriveOptions';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharePointOneDriveOptions(sharePointOneDriveOptions: SharePointOneDriveOptions | undefined = {} as SharePointOneDriveOptions) : Record<string, (node: ParseNode) => void> {
    return {
        "includeContent": n => { sharePointOneDriveOptions.includeContent = n.getEnumValue<SearchContent>(SearchContent); },
        "@odata.type": n => { sharePointOneDriveOptions.odataType = n.getStringValue(); },
    }
}
