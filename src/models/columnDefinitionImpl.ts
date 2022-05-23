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
import {GeolocationColumn} from './geolocationColumn';
import {HyperlinkOrPictureColumn} from './hyperlinkOrPictureColumn';
import {BooleanColumnImpl, CalculatedColumnImpl, ChoiceColumnImpl, ColumnValidationImpl, ContentApprovalStatusColumnImpl, ContentTypeInfoImpl, CurrencyColumnImpl, DateTimeColumnImpl, DefaultColumnValueImpl, EntityImpl, GeolocationColumnImpl, HyperlinkOrPictureColumnImpl, LookupColumnImpl, NumberColumnImpl, PersonOrGroupColumnImpl, TermColumnImpl, TextColumnImpl, ThumbnailColumnImpl} from './index';
import {LookupColumn} from './lookupColumn';
import {NumberColumn} from './numberColumn';
import {PersonOrGroupColumn} from './personOrGroupColumn';
import {TermColumn} from './termColumn';
import {TextColumn} from './textColumn';
import {ThumbnailColumn} from './thumbnailColumn';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class ColumnDefinitionImpl extends EntityImpl implements ColumnDefinition, Parsable {
    /** This column stores boolean values. */
    public boolean?: BooleanColumn | undefined;
    /** This column's data is calculated based on other columns. */
    public calculated?: CalculatedColumn | undefined;
    /** This column stores data from a list of choices. */
    public choice?: ChoiceColumn | undefined;
    /** For site columns, the name of the group this column belongs to. Helps organize related columns. */
    public columnGroup?: string | undefined;
    /** This column stores content approval status. */
    public contentApprovalStatus?: ContentApprovalStatusColumn | undefined;
    /** This column stores currency values. */
    public currency?: CurrencyColumn | undefined;
    /** This column stores DateTime values. */
    public dateTime?: DateTimeColumn | undefined;
    /** The default value for this column. */
    public defaultValue?: DefaultColumnValue | undefined;
    /** The user-facing description of the column. */
    public description?: string | undefined;
    /** The user-facing name of the column. */
    public displayName?: string | undefined;
    /** If true, no two list items may have the same value for this column. */
    public enforceUniqueValues?: boolean | undefined;
    /** This column stores a geolocation. */
    public geolocation?: GeolocationColumn | undefined;
    /** Specifies whether the column is displayed in the user interface. */
    public hidden?: boolean | undefined;
    /** This column stores hyperlink or picture values. */
    public hyperlinkOrPicture?: HyperlinkOrPictureColumn | undefined;
    /** Specifies whether the column values can used for sorting and searching. */
    public indexed?: boolean | undefined;
    /** Indicates whether this column can be deleted. */
    public isDeletable?: boolean | undefined;
    /** Indicates whether values in the column can be reordered. Read-only. */
    public isReorderable?: boolean | undefined;
    /** Specifies whether the column can be changed. */
    public isSealed?: boolean | undefined;
    /** This column's data is looked up from another source in the site. */
    public lookup?: LookupColumn | undefined;
    /** The API-facing name of the column as it appears in the [fields][] on a [listItem][]. For the user-facing name, see displayName. */
    public name?: string | undefined;
    /** This column stores number values. */
    public number?: NumberColumn | undefined;
    /** This column stores Person or Group values. */
    public personOrGroup?: PersonOrGroupColumn | undefined;
    /** If true, changes to this column will be propagated to lists that implement the column. */
    public propagateChanges?: boolean | undefined;
    /** Specifies whether the column values can be modified. */
    public readOnly?: boolean | undefined;
    /** Specifies whether the column value isn't optional. */
    public required?: boolean | undefined;
    /** The source column for content type column. */
    public sourceColumn?: ColumnDefinition | undefined;
    /** ContentType from which this column is inherited from. Used only to fetch contentTypes columns. */
    public sourceContentType?: ContentTypeInfo | undefined;
    /** This column stores taxonomy terms. */
    public term?: TermColumn | undefined;
    /** This column stores text values. */
    public text?: TextColumn | undefined;
    /** This column stores thumbnail values. */
    public thumbnail?: ThumbnailColumn | undefined;
    /** For site columns, the type of column. Read-only. */
    public type?: ColumnTypes | undefined;
    /** This column stores validation formula and message for the column. */
    public validation?: ColumnValidation | undefined;
    /**
     * Instantiates a new columnDefinition and sets the default values.
     * @param columnDefinitionParameterValue 
     */
    public constructor(columnDefinitionParameterValue?: ColumnDefinition | undefined) {
        super();
        this.boolean = columnDefinitionParameterValue?.boolean ;
        this.calculated = columnDefinitionParameterValue?.calculated ;
        this.choice = columnDefinitionParameterValue?.choice ;
        this.columnGroup = columnDefinitionParameterValue?.columnGroup ;
        this.contentApprovalStatus = columnDefinitionParameterValue?.contentApprovalStatus ;
        this.currency = columnDefinitionParameterValue?.currency ;
        this.dateTime = columnDefinitionParameterValue?.dateTime ;
        this.defaultValue = columnDefinitionParameterValue?.defaultValue ;
        this.description = columnDefinitionParameterValue?.description ;
        this.displayName = columnDefinitionParameterValue?.displayName ;
        this.enforceUniqueValues = columnDefinitionParameterValue?.enforceUniqueValues ;
        this.geolocation = columnDefinitionParameterValue?.geolocation ;
        this.hidden = columnDefinitionParameterValue?.hidden ;
        this.hyperlinkOrPicture = columnDefinitionParameterValue?.hyperlinkOrPicture ;
        this.indexed = columnDefinitionParameterValue?.indexed ;
        this.isDeletable = columnDefinitionParameterValue?.isDeletable ;
        this.isReorderable = columnDefinitionParameterValue?.isReorderable ;
        this.isSealed = columnDefinitionParameterValue?.isSealed ;
        this.lookup = columnDefinitionParameterValue?.lookup ;
        this.name = columnDefinitionParameterValue?.name ;
        this.number = columnDefinitionParameterValue?.number ;
        this.personOrGroup = columnDefinitionParameterValue?.personOrGroup ;
        this.propagateChanges = columnDefinitionParameterValue?.propagateChanges ;
        this.readOnly = columnDefinitionParameterValue?.readOnly ;
        this.required = columnDefinitionParameterValue?.required ;
        this.sourceColumn = columnDefinitionParameterValue?.sourceColumn ;
        this.sourceContentType = columnDefinitionParameterValue?.sourceContentType ;
        this.term = columnDefinitionParameterValue?.term ;
        this.text = columnDefinitionParameterValue?.text ;
        this.thumbnail = columnDefinitionParameterValue?.thumbnail ;
        this.type = columnDefinitionParameterValue?.type ;
        this.validation = columnDefinitionParameterValue?.validation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "boolean": n => { this.boolean = n.getObjectValue<BooleanColumnImpl>(createBooleanColumnFromDiscriminatorValue); },
            "calculated": n => { this.calculated = n.getObjectValue<CalculatedColumnImpl>(createCalculatedColumnFromDiscriminatorValue); },
            "choice": n => { this.choice = n.getObjectValue<ChoiceColumnImpl>(createChoiceColumnFromDiscriminatorValue); },
            "columnGroup": n => { this.columnGroup = n.getStringValue(); },
            "contentApprovalStatus": n => { this.contentApprovalStatus = n.getObjectValue<ContentApprovalStatusColumnImpl>(createContentApprovalStatusColumnFromDiscriminatorValue); },
            "currency": n => { this.currency = n.getObjectValue<CurrencyColumnImpl>(createCurrencyColumnFromDiscriminatorValue); },
            "dateTime": n => { this.dateTime = n.getObjectValue<DateTimeColumnImpl>(createDateTimeColumnFromDiscriminatorValue); },
            "defaultValue": n => { this.defaultValue = n.getObjectValue<DefaultColumnValueImpl>(createDefaultColumnValueFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "enforceUniqueValues": n => { this.enforceUniqueValues = n.getBooleanValue(); },
            "geolocation": n => { this.geolocation = n.getObjectValue<GeolocationColumnImpl>(createGeolocationColumnFromDiscriminatorValue); },
            "hidden": n => { this.hidden = n.getBooleanValue(); },
            "hyperlinkOrPicture": n => { this.hyperlinkOrPicture = n.getObjectValue<HyperlinkOrPictureColumnImpl>(createHyperlinkOrPictureColumnFromDiscriminatorValue); },
            "indexed": n => { this.indexed = n.getBooleanValue(); },
            "isDeletable": n => { this.isDeletable = n.getBooleanValue(); },
            "isReorderable": n => { this.isReorderable = n.getBooleanValue(); },
            "isSealed": n => { this.isSealed = n.getBooleanValue(); },
            "lookup": n => { this.lookup = n.getObjectValue<LookupColumnImpl>(createLookupColumnFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "number": n => { this.number = n.getObjectValue<NumberColumnImpl>(createNumberColumnFromDiscriminatorValue); },
            "personOrGroup": n => { this.personOrGroup = n.getObjectValue<PersonOrGroupColumnImpl>(createPersonOrGroupColumnFromDiscriminatorValue); },
            "propagateChanges": n => { this.propagateChanges = n.getBooleanValue(); },
            "readOnly": n => { this.readOnly = n.getBooleanValue(); },
            "required": n => { this.required = n.getBooleanValue(); },
            "sourceColumn": n => { this.sourceColumn = n.getObjectValue<ColumnDefinitionImpl>(createColumnDefinitionFromDiscriminatorValue); },
            "sourceContentType": n => { this.sourceContentType = n.getObjectValue<ContentTypeInfoImpl>(createContentTypeInfoFromDiscriminatorValue); },
            "term": n => { this.term = n.getObjectValue<TermColumnImpl>(createTermColumnFromDiscriminatorValue); },
            "text": n => { this.text = n.getObjectValue<TextColumnImpl>(createTextColumnFromDiscriminatorValue); },
            "thumbnail": n => { this.thumbnail = n.getObjectValue<ThumbnailColumnImpl>(createThumbnailColumnFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<ColumnTypes>(ColumnTypes); },
            "validation": n => { this.validation = n.getObjectValue<ColumnValidationImpl>(createColumnValidationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.boolean){
        writer.writeObjectValue<BooleanColumnImpl>("boolean", new BooleanColumnImpl(this.boolean));
        }
        if(this.calculated){
        writer.writeObjectValue<CalculatedColumnImpl>("calculated", new CalculatedColumnImpl(this.calculated));
        }
        if(this.choice){
        writer.writeObjectValue<ChoiceColumnImpl>("choice", new ChoiceColumnImpl(this.choice));
        }
        if(this.columnGroup){
        writer.writeStringValue("columnGroup", this.columnGroup);
        }
        if(this.contentApprovalStatus){
        writer.writeObjectValue<ContentApprovalStatusColumnImpl>("contentApprovalStatus", new ContentApprovalStatusColumnImpl(this.contentApprovalStatus));
        }
        if(this.currency){
        writer.writeObjectValue<CurrencyColumnImpl>("currency", new CurrencyColumnImpl(this.currency));
        }
        if(this.dateTime){
        writer.writeObjectValue<DateTimeColumnImpl>("dateTime", new DateTimeColumnImpl(this.dateTime));
        }
        if(this.defaultValue){
        writer.writeObjectValue<DefaultColumnValueImpl>("defaultValue", new DefaultColumnValueImpl(this.defaultValue));
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.enforceUniqueValues){
        writer.writeBooleanValue("enforceUniqueValues", this.enforceUniqueValues);
        }
        if(this.geolocation){
        writer.writeObjectValue<GeolocationColumnImpl>("geolocation", new GeolocationColumnImpl(this.geolocation));
        }
        if(this.hidden){
        writer.writeBooleanValue("hidden", this.hidden);
        }
        if(this.hyperlinkOrPicture){
        writer.writeObjectValue<HyperlinkOrPictureColumnImpl>("hyperlinkOrPicture", new HyperlinkOrPictureColumnImpl(this.hyperlinkOrPicture));
        }
        if(this.indexed){
        writer.writeBooleanValue("indexed", this.indexed);
        }
        if(this.isDeletable){
        writer.writeBooleanValue("isDeletable", this.isDeletable);
        }
        if(this.isReorderable){
        writer.writeBooleanValue("isReorderable", this.isReorderable);
        }
        if(this.isSealed){
        writer.writeBooleanValue("isSealed", this.isSealed);
        }
        if(this.lookup){
        writer.writeObjectValue<LookupColumnImpl>("lookup", new LookupColumnImpl(this.lookup));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.number){
        writer.writeObjectValue<NumberColumnImpl>("number", new NumberColumnImpl(this.number));
        }
        if(this.personOrGroup){
        writer.writeObjectValue<PersonOrGroupColumnImpl>("personOrGroup", new PersonOrGroupColumnImpl(this.personOrGroup));
        }
        if(this.propagateChanges){
        writer.writeBooleanValue("propagateChanges", this.propagateChanges);
        }
        if(this.readOnly){
        writer.writeBooleanValue("readOnly", this.readOnly);
        }
        if(this.required){
        writer.writeBooleanValue("required", this.required);
        }
        if(this.sourceColumn){
        writer.writeObjectValue<ColumnDefinitionImpl>("sourceColumn", new ColumnDefinitionImpl(this.sourceColumn));
        }
        if(this.sourceContentType){
        writer.writeObjectValue<ContentTypeInfoImpl>("sourceContentType", new ContentTypeInfoImpl(this.sourceContentType));
        }
        if(this.term){
        writer.writeObjectValue<TermColumnImpl>("term", new TermColumnImpl(this.term));
        }
        if(this.text){
        writer.writeObjectValue<TextColumnImpl>("text", new TextColumnImpl(this.text));
        }
        if(this.thumbnail){
        writer.writeObjectValue<ThumbnailColumnImpl>("thumbnail", new ThumbnailColumnImpl(this.thumbnail));
        }
        if(this.type){
        writer.writeEnumValue<ColumnTypes>("type", this.type);
        }
        if(this.validation){
        writer.writeObjectValue<ColumnValidationImpl>("validation", new ColumnValidationImpl(this.validation));
        }
    };
}
