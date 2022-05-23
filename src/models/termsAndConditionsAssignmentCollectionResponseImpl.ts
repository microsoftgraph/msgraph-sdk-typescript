import {createTermsAndConditionsAssignmentFromDiscriminatorValue} from './createTermsAndConditionsAssignmentFromDiscriminatorValue';
import {TermsAndConditionsAssignmentImpl} from './index';
import {TermsAndConditionsAssignment} from './termsAndConditionsAssignment';
import {TermsAndConditionsAssignmentCollectionResponse} from './termsAndConditionsAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsAndConditionsAssignmentCollectionResponseImpl implements AdditionalDataHolder, Parsable, TermsAndConditionsAssignmentCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TermsAndConditionsAssignment[] | undefined;
    /**
     * Instantiates a new TermsAndConditionsAssignmentCollectionResponse and sets the default values.
     * @param termsAndConditionsAssignmentCollectionResponseParameterValue 
     */
    public constructor(termsAndConditionsAssignmentCollectionResponseParameterValue?: TermsAndConditionsAssignmentCollectionResponse | undefined) {
        this.additionalData = termsAndConditionsAssignmentCollectionResponseParameterValue?.additionalData ? termsAndConditionsAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = termsAndConditionsAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = termsAndConditionsAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>(createTermsAndConditionsAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TermsAndConditionsAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TermsAndConditionsAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TermsAndConditionsAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
