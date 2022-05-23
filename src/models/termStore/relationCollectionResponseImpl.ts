import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {RelationImpl} from './index';
import {Relation} from './relation';
import {RelationCollectionResponse} from './relationCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RelationCollectionResponseImpl implements AdditionalDataHolder, Parsable, RelationCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Relation[] | undefined;
    /**
     * Instantiates a new RelationCollectionResponse and sets the default values.
     * @param relationCollectionResponseParameterValue 
     */
    public constructor(relationCollectionResponseParameterValue?: RelationCollectionResponse | undefined) {
        this.additionalData = relationCollectionResponseParameterValue?.additionalData ? relationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = relationCollectionResponseParameterValue?.nextLink ;
        this.value = relationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RelationImpl>(createRelationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: RelationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RelationImpl(element));});
        writer.writeCollectionOfObjectValues<RelationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
