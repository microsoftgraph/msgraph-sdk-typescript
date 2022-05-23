import {AccessPackageApprovalStage} from './accessPackageApprovalStage';
import {AccessPackageAssignmentApprovalSettings} from './accessPackageAssignmentApprovalSettings';
import {createAccessPackageApprovalStageFromDiscriminatorValue} from './createAccessPackageApprovalStageFromDiscriminatorValue';
import {AccessPackageApprovalStageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessPackageAssignmentApprovalSettingsImpl implements AccessPackageAssignmentApprovalSettings, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** If false, then approval is not required for new requests in this policy. */
    public isApprovalRequiredForAdd?: boolean | undefined;
    /** If false, then approval is not required for updates to requests in this policy. */
    public isApprovalRequiredForUpdate?: boolean | undefined;
    /** If approval is required, the one, two or three elements of this collection define each of the stages of approval. An empty array is present if no approval is required. */
    public stages?: AccessPackageApprovalStage[] | undefined;
    /**
     * Instantiates a new accessPackageAssignmentApprovalSettings and sets the default values.
     * @param accessPackageAssignmentApprovalSettingsParameterValue 
     */
    public constructor(accessPackageAssignmentApprovalSettingsParameterValue?: AccessPackageAssignmentApprovalSettings | undefined) {
        this.additionalData = accessPackageAssignmentApprovalSettingsParameterValue?.additionalData ? accessPackageAssignmentApprovalSettingsParameterValue?.additionalData! : {}
        this.isApprovalRequiredForAdd = accessPackageAssignmentApprovalSettingsParameterValue?.isApprovalRequiredForAdd ;
        this.isApprovalRequiredForUpdate = accessPackageAssignmentApprovalSettingsParameterValue?.isApprovalRequiredForUpdate ;
        this.stages = accessPackageAssignmentApprovalSettingsParameterValue?.stages ;
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
        if(this.stages && this.stages.length != 0){        const stagesArrValue: AccessPackageApprovalStageImpl[] = []; this.stages?.forEach(element => {stagesArrValue.push(new AccessPackageApprovalStageImpl(element));});
        writer.writeCollectionOfObjectValues<AccessPackageApprovalStageImpl>("stages", stagesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
