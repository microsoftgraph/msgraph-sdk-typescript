import {MobileAppAssignmentImpl} from '../../../../models/';
import {createMobileAppAssignmentFromDiscriminatorValue} from '../../../../models/createMobileAppAssignmentFromDiscriminatorValue';
import {MobileAppAssignment} from '../../../../models/mobileAppAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AssignPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The mobileAppAssignments property */
    private _mobileAppAssignments?: MobileAppAssignment[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this._additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {};
        this._mobileAppAssignments = assignPostRequestBodyParameterValue?.mobileAppAssignments;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "mobileAppAssignments": n => { this.mobileAppAssignments = n.getCollectionOfObjectValues<MobileAppAssignmentImpl>(createMobileAppAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the mobileAppAssignments property value. The mobileAppAssignments property
     * @returns a MobileAppAssignmentInterface
     */
    public get mobileAppAssignments() {
        return this._mobileAppAssignments;
    };
    /**
     * Sets the mobileAppAssignments property value. The mobileAppAssignments property
     * @param value Value to set for the mobileAppAssignments property.
     */
    public set mobileAppAssignments(value: MobileAppAssignment[] | undefined) {
        if(value) {
            const mobileAppAssignmentsArrValue: MobileAppAssignmentImpl[] = [];
            this.mobileAppAssignments?.forEach(element => {
                mobileAppAssignmentsArrValue.push((element instanceof MobileAppAssignmentImpl? element:new MobileAppAssignmentImpl(element)));
            });
            this._mobileAppAssignments = mobileAppAssignmentsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.mobileAppAssignments && this.mobileAppAssignments.length != 0){        const mobileAppAssignmentsArrValue: MobileAppAssignmentImpl[] = [];
        this.mobileAppAssignments?.forEach(element => {
            mobileAppAssignmentsArrValue.push((element instanceof MobileAppAssignmentImpl? element:new MobileAppAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MobileAppAssignmentImpl>("mobileAppAssignments", mobileAppAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
