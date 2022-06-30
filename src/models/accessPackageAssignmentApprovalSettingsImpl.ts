import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {createAccessPackageApprovalStageFromDiscriminatorValue} from './createAccessPackageApprovalStageFromDiscriminatorValue';
import {AccessPackageApprovalStageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentApprovalSettingsImpl implements AccessPackageAssignmentApprovalSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** If false, then approval is not required for new requests in this policy. */
    private _isApprovalRequiredForAdd?: boolean | undefined;
    /** If false, then approval is not required for updates to requests in this policy. */
    private _isApprovalRequiredForUpdate?: boolean | undefined;
    /** If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required. */
    private _stages?: AccessPackageApprovalStage[] | undefined;
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
     * Instantiates a new accessPackageAssignmentApprovalSettings and sets the default values.
     * @param accessPackageAssignmentApprovalSettingsParameterValue 
     */
    public constructor(accessPackageAssignmentApprovalSettingsParameterValue?: AccessPackageAssignmentApprovalSettings | undefined) {
        this._additionalData = accessPackageAssignmentApprovalSettingsParameterValue?.additionalData ? accessPackageAssignmentApprovalSettingsParameterValue?.additionalData! : {};
        this._isApprovalRequiredForAdd = accessPackageAssignmentApprovalSettingsParameterValue?.isApprovalRequiredForAdd;
        this._isApprovalRequiredForUpdate = accessPackageAssignmentApprovalSettingsParameterValue?.isApprovalRequiredForUpdate;
        this._stages = accessPackageAssignmentApprovalSettingsParameterValue?.stages;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "isApprovalRequiredForAdd": n => { this.isApprovalRequiredForAdd = n.getBooleanValue(); },
            "isApprovalRequiredForUpdate": n => { this.isApprovalRequiredForUpdate = n.getBooleanValue(); },
            "stages": n => { this.stages = n.getCollectionOfObjectValues<AccessPackageApprovalStageImpl>(createAccessPackageApprovalStageFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isApprovalRequiredForAdd property value. If false, then approval is not required for new requests in this policy.
     * @returns a boolean
     */
    public get isApprovalRequiredForAdd() {
        return this._isApprovalRequiredForAdd;
    };
    /**
     * Sets the isApprovalRequiredForAdd property value. If false, then approval is not required for new requests in this policy.
     * @param value Value to set for the isApprovalRequiredForAdd property.
     */
    public set isApprovalRequiredForAdd(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequiredForAdd = value;
        }
    };
    /**
     * Gets the isApprovalRequiredForUpdate property value. If false, then approval is not required for updates to requests in this policy.
     * @returns a boolean
     */
    public get isApprovalRequiredForUpdate() {
        return this._isApprovalRequiredForUpdate;
    };
    /**
     * Sets the isApprovalRequiredForUpdate property value. If false, then approval is not required for updates to requests in this policy.
     * @param value Value to set for the isApprovalRequiredForUpdate property.
     */
    public set isApprovalRequiredForUpdate(value: boolean | undefined) {
        if(value) {
            this._isApprovalRequiredForUpdate = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.isApprovalRequiredForAdd){
            writer.writeBooleanValue("isApprovalRequiredForAdd", this.isApprovalRequiredForAdd);
        }
        if(this.isApprovalRequiredForUpdate){
            writer.writeBooleanValue("isApprovalRequiredForUpdate", this.isApprovalRequiredForUpdate);
        }
        if(this.stages && this.stages.length != 0){        const stagesArrValue: AccessPackageApprovalStageImpl[] = [];
        this.stages?.forEach(element => {
            stagesArrValue.push((element instanceof AccessPackageApprovalStageImpl? element:new AccessPackageApprovalStageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessPackageApprovalStageImpl>("stages", stagesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the stages property value. If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required.
     * @returns a AccessPackageApprovalStageInterface
     */
    public get stages() {
        return this._stages;
    };
    /**
     * Sets the stages property value. If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required.
     * @param value Value to set for the stages property.
     */
    public set stages(value: AccessPackageApprovalStage[] | undefined) {
        if(value) {
            const stagesArrValue: AccessPackageApprovalStageImpl[] = [];
            this.stages?.forEach(element => {
                stagesArrValue.push((element instanceof AccessPackageApprovalStageImpl? element:new AccessPackageApprovalStageImpl(element)));
            });
            this._stages = stagesArrValue;
        }
    };
}
