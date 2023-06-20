import {ColumnValidation} from './columnValidation';
import {DisplayNameLocalization} from './displayNameLocalization';
import {serializeDisplayNameLocalization} from './serializeDisplayNameLocalization';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeColumnValidation(columnValidation: ColumnValidation | undefined = {} as ColumnValidation, writer: SerializationWriter) : void {
        writer.writeStringValue("defaultLanguage", columnValidation.defaultLanguage);
        writer.writeCollectionOfObjectValues<DisplayNameLocalization>("descriptions", columnValidation.descriptions, serializeDisplayNameLocalization);
        writer.writeStringValue("formula", columnValidation.formula);
        writer.writeStringValue("@odata.type", columnValidation.odataType);
        writer.writeAdditionalData(columnValidation.additionalData);
}
