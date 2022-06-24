import {AccessPackageAssignmentPolicy} from './accessPackageAssignmentPolicy';
import {AccessPackageAssignmentPolicyCollectionResponse} from './accessPackageAssignmentPolicyCollectionResponse';
import {createAccessPackageAssignmentPolicyFromDiscriminatorValue} from './createAccessPackageAssignmentPolicyFromDiscriminatorValue';
import {AccessPackageAssignmentPolicyImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentPolicyCollectionResponseImpl implements AccessPackageAssignmentPolicyCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AccessPackageAssignmentPolicy[] | undefined;
    /**
     * Instantiates a new AccessPackageAssignmentPolicyCollectionResponse and sets the default values.
     * @param accessPackageAssignmentPolicyCollectionResponseParameterValue 
     */
    public constructor(accessPackageAssignmentPolicyCollectionResponseParameterValue?: AccessPackageAssignmentPolicyCollectionResponse | undefined) {
        this.additionalData = accessPackageAssignmentPolicyCollectionResponseParameterValue?.additionalData ? accessPackageAssignmentPolicyCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = accessPackageAssignmentPolicyCollectionResponseParameterValue?.nextLink;
        const valueArrValue: AccessPackageAssignmentPolicyImpl[] = []; accessPackageAssignmentPolicyCollectionResponseParameterValue.value?.forEach(element => {valueArrValue.push(element instanceof AccessPackageAssignmentPolicyImpl? element : new AccessPackageAssignmentPolicyImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>(createAccessPackageAssignmentPolicyFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AccessPackageAssignmentPolicyImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof AccessPackageAssignmentPolicyImpl? element : new AccessPackageAssignmentPolicyImpl(element));});
            writer.writeCollectionOfObjectValues<AccessPackageAssignmentPolicyImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
