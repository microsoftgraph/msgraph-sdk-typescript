import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from './createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {EnrollmentConfigurationAssignment} from './enrollmentConfigurationAssignment';
import {EnrollmentConfigurationAssignmentCollectionResponse} from './enrollmentConfigurationAssignmentCollectionResponse';
import {EnrollmentConfigurationAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EnrollmentConfigurationAssignmentCollectionResponseImpl implements AdditionalDataHolder, EnrollmentConfigurationAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: EnrollmentConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new EnrollmentConfigurationAssignmentCollectionResponse and sets the default values.
     * @param enrollmentConfigurationAssignmentCollectionResponseParameterValue 
     */
    public constructor(enrollmentConfigurationAssignmentCollectionResponseParameterValue?: EnrollmentConfigurationAssignmentCollectionResponse | undefined) {
        this.additionalData = enrollmentConfigurationAssignmentCollectionResponseParameterValue?.additionalData ? enrollmentConfigurationAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = enrollmentConfigurationAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = enrollmentConfigurationAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: EnrollmentConfigurationAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new EnrollmentConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
