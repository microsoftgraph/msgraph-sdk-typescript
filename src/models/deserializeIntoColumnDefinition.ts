import {BooleanColumn} from './booleanColumn';
import {CalculatedColumn} from './calculatedColumn';
import {ChoiceColumn} from './choiceColumn';
import {ColumnDefinition} from './columnDefinition';
import {ColumnTypes} from './columnTypes';
import {ColumnValidation} from './columnValidation';
import {ContentApprovalStatusColumn} from './contentApprovalStatusColumn';
import {ContentTypeInfo} from './contentTypeInfo';
import {createBooleanColumnFromDiscriminatorValue} from './createBooleanColumnFromDiscriminatorValue';
import {createCalculatedColumnFromDiscriminatorValue} from './createCalculatedColumnFromDiscriminatorValue';
import {createChoiceColumnFromDiscriminatorValue} from './createChoiceColumnFromDiscriminatorValue';
import {createColumnDefinitionFromDiscriminatorValue} from './createColumnDefinitionFromDiscriminatorValue';
import {createColumnValidationFromDiscriminatorValue} from './createColumnValidationFromDiscriminatorValue';
import {createContentApprovalStatusColumnFromDiscriminatorValue} from './createContentApprovalStatusColumnFromDiscriminatorValue';
import {createContentTypeInfoFromDiscriminatorValue} from './createContentTypeInfoFromDiscriminatorValue';
import {createCurrencyColumnFromDiscriminatorValue} from './createCurrencyColumnFromDiscriminatorValue';
import {createDateTimeColumnFromDiscriminatorValue} from './createDateTimeColumnFromDiscriminatorValue';
import {createDefaultColumnValueFromDiscriminatorValue} from './createDefaultColumnValueFromDiscriminatorValue';
import {createGeolocationColumnFromDiscriminatorValue} from './createGeolocationColumnFromDiscriminatorValue';
import {createHyperlinkOrPictureColumnFromDiscriminatorValue} from './createHyperlinkOrPictureColumnFromDiscriminatorValue';
import {createLookupColumnFromDiscriminatorValue} from './createLookupColumnFromDiscriminatorValue';
import {createNumberColumnFromDiscriminatorValue} from './createNumberColumnFromDiscriminatorValue';
import {createPersonOrGroupColumnFromDiscriminatorValue} from './createPersonOrGroupColumnFromDiscriminatorValue';
import {createTermColumnFromDiscriminatorValue} from './createTermColumnFromDiscriminatorValue';
import {createTextColumnFromDiscriminatorValue} from './createTextColumnFromDiscriminatorValue';
import {createThumbnailColumnFromDiscriminatorValue} from './createThumbnailColumnFromDiscriminatorValue';
import {CurrencyColumn} from './currencyColumn';
import {DateTimeColumn} from './dateTimeColumn';
import {DefaultColumnValue} from './defaultColumnValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {GeolocationColumn} from './geolocationColumn';
import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {LookupColumn} from './lookupColumn';
import {NumberColumn} from './numberColumn';
import {PersonOrGroupColumn} from './personOrGroupColumn';
import {serializeBooleanColumn} from './serializeBooleanColumn';
import {serializeCalculatedColumn} from './serializeCalculatedColumn';
import {serializeChoiceColumn} from './serializeChoiceColumn';
import {serializeColumnDefinition} from './serializeColumnDefinition';
import {serializeColumnValidation} from './serializeColumnValidation';
import {serializeContentApprovalStatusColumn} from './serializeContentApprovalStatusColumn';
import {serializeContentTypeInfo} from './serializeContentTypeInfo';
import {serializeCurrencyColumn} from './serializeCurrencyColumn';
import {serializeDateTimeColumn} from './serializeDateTimeColumn';
import {serializeDefaultColumnValue} from './serializeDefaultColumnValue';
import {serializeGeolocationColumn} from './serializeGeolocationColumn';
import {serializeHyperlinkOrPictureColumn} from './serializeHyperlinkOrPictureColumn';
import {serializeLookupColumn} from './serializeLookupColumn';
import {serializeNumberColumn} from './serializeNumberColumn';
import {serializePersonOrGroupColumn} from './serializePersonOrGroupColumn';
import {serializeTermColumn} from './serializeTermColumn';
import {serializeTextColumn} from './serializeTextColumn';
import {serializeThumbnailColumn} from './serializeThumbnailColumn';
import {TermColumn} from './termColumn';
import {TextColumn} from './textColumn';
import {ThumbnailColumn} from './thumbnailColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoColumnDefinition(columnDefinition: ColumnDefinition | undefined = {} as ColumnDefinition) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(columnDefinition),
        "boolean": n => { columnDefinition.boolean = n.getObjectValue<BooleanColumn>(createBooleanColumnFromDiscriminatorValue); },
        "calculated": n => { columnDefinition.calculated = n.getObjectValue<CalculatedColumn>(createCalculatedColumnFromDiscriminatorValue); },
        "choice": n => { columnDefinition.choice = n.getObjectValue<ChoiceColumn>(createChoiceColumnFromDiscriminatorValue); },
        "columnGroup": n => { columnDefinition.columnGroup = n.getStringValue(); },
        "contentApprovalStatus": n => { columnDefinition.contentApprovalStatus = n.getObjectValue<ContentApprovalStatusColumn>(createContentApprovalStatusColumnFromDiscriminatorValue); },
        "currency": n => { columnDefinition.currency = n.getObjectValue<CurrencyColumn>(createCurrencyColumnFromDiscriminatorValue); },
        "dateTime": n => { columnDefinition.dateTime = n.getObjectValue<DateTimeColumn>(createDateTimeColumnFromDiscriminatorValue); },
        "defaultValue": n => { columnDefinition.defaultValue = n.getObjectValue<DefaultColumnValue>(createDefaultColumnValueFromDiscriminatorValue); },
        "description": n => { columnDefinition.description = n.getStringValue(); },
        "displayName": n => { columnDefinition.displayName = n.getStringValue(); },
        "enforceUniqueValues": n => { columnDefinition.enforceUniqueValues = n.getBooleanValue(); },
        "geolocation": n => { columnDefinition.geolocation = n.getObjectValue<GeolocationColumn>(createGeolocationColumnFromDiscriminatorValue); },
        "hidden": n => { columnDefinition.hidden = n.getBooleanValue(); },
        "hyperlinkOrPicture": n => { columnDefinition.hyperlinkOrPicture = n.getObjectValue<HyperlinkOrPictureColumn>(createHyperlinkOrPictureColumnFromDiscriminatorValue); },
        "indexed": n => { columnDefinition.indexed = n.getBooleanValue(); },
        "isDeletable": n => { columnDefinition.isDeletable = n.getBooleanValue(); },
        "isReorderable": n => { columnDefinition.isReorderable = n.getBooleanValue(); },
        "isSealed": n => { columnDefinition.isSealed = n.getBooleanValue(); },
        "lookup": n => { columnDefinition.lookup = n.getObjectValue<LookupColumn>(createLookupColumnFromDiscriminatorValue); },
        "name": n => { columnDefinition.name = n.getStringValue(); },
        "number": n => { columnDefinition.number = n.getObjectValue<NumberColumn>(createNumberColumnFromDiscriminatorValue); },
        "personOrGroup": n => { columnDefinition.personOrGroup = n.getObjectValue<PersonOrGroupColumn>(createPersonOrGroupColumnFromDiscriminatorValue); },
        "propagateChanges": n => { columnDefinition.propagateChanges = n.getBooleanValue(); },
        "readOnly": n => { columnDefinition.readOnly = n.getBooleanValue(); },
        "required": n => { columnDefinition.required = n.getBooleanValue(); },
        "sourceColumn": n => { columnDefinition.sourceColumn = n.getObjectValue<ColumnDefinition>(createColumnDefinitionFromDiscriminatorValue); },
        "sourceContentType": n => { columnDefinition.sourceContentType = n.getObjectValue<ContentTypeInfo>(createContentTypeInfoFromDiscriminatorValue); },
        "term": n => { columnDefinition.term = n.getObjectValue<TermColumn>(createTermColumnFromDiscriminatorValue); },
        "text": n => { columnDefinition.text = n.getObjectValue<TextColumn>(createTextColumnFromDiscriminatorValue); },
        "thumbnail": n => { columnDefinition.thumbnail = n.getObjectValue<ThumbnailColumn>(createThumbnailColumnFromDiscriminatorValue); },
        "type": n => { columnDefinition.type = n.getEnumValue<ColumnTypes>(ColumnTypes); },
        "validation": n => { columnDefinition.validation = n.getObjectValue<ColumnValidation>(createColumnValidationFromDiscriminatorValue); },
    }
}
