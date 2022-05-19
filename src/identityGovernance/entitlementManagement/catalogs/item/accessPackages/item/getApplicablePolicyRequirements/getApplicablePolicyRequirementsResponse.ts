import {AccessPackageAssignmentRequestRequirements} from '../../../../../../../models/';
import {createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue} from '../../../../../../../models/createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getApplicablePolicyRequirements method. */
export class GetApplicablePolicyRequirementsResponse implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The value property */
    private _value?: AccessPackageAssignmentRequestRequirements[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new getApplicablePolicyRequirementsResponse and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<AccessPackageAssignmentRequestRequirements>(createAccessPackageAssignmentRequestRequirementsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AccessPackageAssignmentRequestRequirements>("value", this.value);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the value property value. The value property
     * @returns a accessPackageAssignmentRequestRequirements
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: AccessPackageAssignmentRequestRequirements[] | undefined) {
        this._value = value;
    };
}
