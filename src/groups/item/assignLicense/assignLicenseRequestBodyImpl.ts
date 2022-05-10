import {AssignedLicenseImpl} from '../../../models/';
import {AssignedLicense} from '../../../models/assignedLicense';
import {createAssignedLicenseFromDiscriminatorValue} from '../../../models/createAssignedLicenseFromDiscriminatorValue';
import {AssignLicenseRequestBody} from './assignLicenseRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assignLicense method.  */
export class AssignLicenseRequestBodyImpl implements AdditionalDataHolder, AssignLicenseRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The addLicenses property  */
    addLicenses?: AssignedLicense[] | undefined;
    /** The removeLicenses property  */
    removeLicenses?: string[] | undefined;
    /**
     * Instantiates a new assignLicenseRequestBody and sets the default values.
     * @param assignLicenseRequestBodyParameterValue 
     */
    public constructor(assignLicenseRequestBodyParameterValue?: AssignLicenseRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = assignLicenseRequestBodyParameterValue?.additionalData ? {} : assignLicenseRequestBodyParameterValue?.additionalData!
        this.addLicenses = assignLicenseRequestBodyParameterValue?.addLicenses ;
        this.removeLicenses = assignLicenseRequestBodyParameterValue?.removeLicenses ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "addLicenses": n => { this.addLicenses = n.getCollectionOfObjectValues<AssignedLicenseImpl>(createAssignedLicenseFromDiscriminatorValue); },
            "removeLicenses": n => { this.removeLicenses = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.addLicenses){
        const addLicensesArrValue: AssignedLicenseImpl[] = []; this.addLicenses?.forEach(element => {addLicensesArrValue.push(new AssignedLicenseImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("addLicenses", addLicensesArrValue);
        }
        if(this.removeLicenses){
        if(this.removeLicenses)
        writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", this.removeLicenses);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
