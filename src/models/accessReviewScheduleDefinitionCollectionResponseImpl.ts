import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewScheduleDefinitionCollectionResponse} from './accessReviewScheduleDefinitionCollectionResponse';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {AccessReviewScheduleDefinitionImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewScheduleDefinitionCollectionResponseImpl implements AccessReviewScheduleDefinitionCollectionResponse, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessReviewScheduleDefinition[] | undefined;
    /**
     * Instantiates a new AccessReviewScheduleDefinitionCollectionResponse and sets the default values.
     * @param accessReviewScheduleDefinitionCollectionResponseParameterValue 
     */
    public constructor(accessReviewScheduleDefinitionCollectionResponseParameterValue?: AccessReviewScheduleDefinitionCollectionResponse | undefined) {
        this.additionalData = accessReviewScheduleDefinitionCollectionResponseParameterValue?.additionalData ? accessReviewScheduleDefinitionCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = accessReviewScheduleDefinitionCollectionResponseParameterValue?.nextLink ;
        this.value = accessReviewScheduleDefinitionCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessReviewScheduleDefinitionImpl>(createAccessReviewScheduleDefinitionFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessReviewScheduleDefinitionImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AccessReviewScheduleDefinitionImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinitionImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
