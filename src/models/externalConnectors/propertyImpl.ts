import {Property} from './property';
import {PropertyType} from './propertyType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PropertyImpl implements AdditionalDataHolder, Parsable, Property {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A set of aliases or a friendly names for the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^. Optional. */
    public aliases?: string[] | undefined;
    /** Specifies if the property is queryable. Queryable properties can be used in Keyword Query Language (KQL) queries. Optional. */
    public isQueryable?: boolean | undefined;
    /** Specifies if the property is refinable.  Refinable properties can be used to filter search results in the Search API and add a refiner control in the Microsoft Search user experience. Optional. */
    public isRefinable?: boolean | undefined;
    /** Specifies if the property is retrievable. Retrievable properties are returned in the result set when items are returned by the search API. Retrievable properties are also available to add to the display template used to render search results. Optional. */
    public isRetrievable?: boolean | undefined;
    /** Specifies if the property is searchable. Only properties of type string or stringCollection can be searchable. Non-searchable properties are not added to the search index. Optional. */
    public isSearchable?: boolean | undefined;
    /** Specifies one or more well-known tags added against a property. Labels help Microsoft Search understand the semantics of the data in the connection. Adding appropriate labels would result in an enhanced search experience (e.g. better relevance). Optional.The possible values are: title, url, createdBy, lastModifiedBy, authors, createdDateTime, lastModifiedDateTime, fileName, fileExtension, unknownFutureValue, iconUrl, containerName, containerUrl. Note that you must use the Prefer: include-unknown-enum-members request header to get the following values in this evolvable enum: iconUrl, containerName, containerUrl. */
    public labels?: string[] | undefined;
    /** The name of the property. Maximum 32 characters. Only alphanumeric characters allowed. For example, each string may not contain control characters, whitespace, or any of the following: :, ;, ,, (, ), [, ], {, }, %, $, +, !, *, =, &, ?, @, #, /, ~, ', ', <, >, `, ^.  Required. */
    public name?: string | undefined;
    /** The data type of the property. Possible values are: string, int64, double, dateTime, boolean, stringCollection, int64Collection, doubleCollection, dateTimeCollection, unknownFutureValue. Required. */
    public type?: PropertyType | undefined;
    /**
     * Instantiates a new property and sets the default values.
     * @param propertyParameterValue 
     */
    public constructor(propertyParameterValue?: Property | undefined) {
        this.additionalData = propertyParameterValue?.additionalData ? propertyParameterValue?.additionalData! : {}
        this.aliases = propertyParameterValue?.aliases ;
        this.isQueryable = propertyParameterValue?.isQueryable ;
        this.isRefinable = propertyParameterValue?.isRefinable ;
        this.isRetrievable = propertyParameterValue?.isRetrievable ;
        this.isSearchable = propertyParameterValue?.isSearchable ;
        this.labels = propertyParameterValue?.labels ;
        this.name = propertyParameterValue?.name ;
        this.type = propertyParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "aliases": n => { this.aliases = n.getCollectionOfPrimitiveValues<string>(); },
            "isQueryable": n => { this.isQueryable = n.getBooleanValue(); },
            "isRefinable": n => { this.isRefinable = n.getBooleanValue(); },
            "isRetrievable": n => { this.isRetrievable = n.getBooleanValue(); },
            "isSearchable": n => { this.isSearchable = n.getBooleanValue(); },
            "labels": n => { this.labels = n.getCollectionOfPrimitiveValues<string>(); },
            "name": n => { this.name = n.getStringValue(); },
            "type": n => { this.type = n.getEnumValue<PropertyType>(PropertyType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.aliases){
        writer.writeCollectionOfPrimitiveValues<string>("aliases", this.aliases);
        }
        if(this.isQueryable){
        writer.writeBooleanValue("isQueryable", this.isQueryable);
        }
        if(this.isRefinable){
        writer.writeBooleanValue("isRefinable", this.isRefinable);
        }
        if(this.isRetrievable){
        writer.writeBooleanValue("isRetrievable", this.isRetrievable);
        }
        if(this.isSearchable){
        writer.writeBooleanValue("isSearchable", this.isSearchable);
        }
        if(this.labels){
        writer.writeCollectionOfPrimitiveValues<string>("labels", this.labels);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.type){
        writer.writeEnumValue<PropertyType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
