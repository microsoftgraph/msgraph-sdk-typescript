import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryDefinitionCollectionResponse} from './accessReviewHistoryDefinitionCollectionResponse';
import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {AccessReviewHistoryDefinitionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewHistoryDefinitionCollectionResponseImpl implements AccessReviewHistoryDefinitionCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewHistoryDefinition[] | undefined;
    /**
     * Instantiates a new AccessReviewHistoryDefinitionCollectionResponse and sets the default values.
     * @param accessReviewHistoryDefinitionCollectionResponseParameterValue 
     */
    public constructor(accessReviewHistoryDefinitionCollectionResponseParameterValue?: AccessReviewHistoryDefinitionCollectionResponse | undefined) {
        this.additionalData = accessReviewHistoryDefinitionCollectionResponseParameterValue?.additionalData ? accessReviewHistoryDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessReviewHistoryDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = accessReviewHistoryDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewHistoryDefinitionImpl>(createAccessReviewHistoryDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewHistoryDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewHistoryDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
