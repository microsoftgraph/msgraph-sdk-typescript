import {AssignedLicenseImpl} from '../../../../../../../../../../models/';
import {AssignedLicense} from '../../../../../../../../../../models/assignedLicense';
import {createAssignedLicenseFromDiscriminatorValue} from '../../../../../../../../../../models/createAssignedLicenseFromDiscriminatorValue';
import {AssignLicensePostRequestBody} from './assignLicensePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assignLicense method. */
export class AssignLicensePostRequestBodyImpl implements AdditionalDataHolder, AssignLicensePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The addLicenses property */
    public addLicenses?: AssignedLicense[] | undefined;
    /** The removeLicenses property */
    public removeLicenses?: string[] | undefined;
    /**
     * Instantiates a new assignLicensePostRequestBody and sets the default values.
     * @param assignLicensePostRequestBodyParameterValue 
     */
    public constructor(assignLicensePostRequestBodyParameterValue?: AssignLicensePostRequestBody | undefined) {
        this.additionalData = assignLicensePostRequestBodyParameterValue?.additionalData ? assignLicensePostRequestBodyParameterValue?.additionalData! : {}
        this.addLicenses = assignLicensePostRequestBodyParameterValue?.addLicenses ;
        this.removeLicenses = assignLicensePostRequestBodyParameterValue?.removeLicenses ;
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
        if(this.addLicenses && this.addLicenses.length != 0){        const addLicensesArrValue: AssignedLicenseImpl[] = []; this.addLicenses?.forEach(element => {addLicensesArrValue.push(new AssignedLicenseImpl(element));});
        writer.writeCollectionOfObjectValues<AssignedLicenseImpl>("addLicenses", addLicensesArrValue);
        }
        if(this.removeLicenses){
        writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", this.removeLicenses);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
