import {AppScope} from './appScope';
import {createAppScopeFromDiscriminatorValue} from './createAppScopeFromDiscriminatorValue';
import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {createUnifiedRoleDefinitionFromDiscriminatorValue} from './createUnifiedRoleDefinitionFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {AppScopeImpl, DirectoryObjectImpl, EntityImpl, UnifiedRoleDefinitionImpl} from './index';
import {UnifiedRoleDefinition} from './unifiedRoleDefinition';
import {UnifiedRoleScheduleBase} from './unifiedRoleScheduleBase';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class UnifiedRoleScheduleBaseImpl extends EntityImpl implements UnifiedRoleScheduleBase {
    /** Read-only property with details of the app-specific scope when the role eligibility or assignment is scoped to an app. Nullable. */
    public appScope?: AppScope | undefined;
    /** Identifier of the app-specific scope when the assignment or eligibility is scoped to an app. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. App scopes are scopes that are defined and understood by this application only. Use / for tenant-wide app scopes. Use directoryScopeId to limit the scope to particular directory objects, for example, administrative units. */
    public appScopeId?: string | undefined;
    /** When the schedule was created. */
    public createdDateTime?: Date | undefined;
    /** Identifier of the object through which this schedule was created. */
    public createdUsing?: string | undefined;
    /** The directory object that is the scope of the role eligibility or assignment. Read-only. */
    public directoryScope?: DirectoryObject | undefined;
    /** Identifier of the directory object representing the scope of the assignment or eligibility. The scope of an assignment or eligibility determines the set of resources for which the principal has been granted access. Directory scopes are shared scopes stored in the directory that are understood by multiple applications. Use / for tenant-wide scope. Use appScopeId to limit the scope to an application only. */
    public directoryScopeId?: string | undefined;
    /** When the schedule was last modified. */
    public modifiedDateTime?: Date | undefined;
    /** The principal that's getting a role assignment or that's eligible for a role through the request. */
    public principal?: DirectoryObject | undefined;
    /** Identifier of the principal that has been granted the role assignment or eligibility. */
    public principalId?: string | undefined;
    /** Detailed information for the roleDefinition object that is referenced through the roleDefinitionId property. */
    public roleDefinition?: UnifiedRoleDefinition | undefined;
    /** Identifier of the unifiedRoleDefinition object that is being assigned to the principal or that a principal is eligible for. */
    public roleDefinitionId?: string | undefined;
    /** The status of the role assignment or eligibility request. */
    public status?: string | undefined;
    /**
     * Instantiates a new unifiedRoleScheduleBase and sets the default values.
     * @param unifiedRoleScheduleBaseParameterValue 
     */
    public constructor(unifiedRoleScheduleBaseParameterValue?: UnifiedRoleScheduleBase | undefined) {
        super(unifiedRoleScheduleBaseParameterValue);
        this.appScope = unifiedRoleScheduleBaseParameterValue?.appScope instanceof AppScopeImpl? unifiedRoleScheduleBaseParameterValue?.appScope:new AppScopeImpl(unifiedRoleScheduleBaseParameterValue?.appScope);
        this.appScopeId = unifiedRoleScheduleBaseParameterValue?.appScopeId;
        this.createdDateTime = unifiedRoleScheduleBaseParameterValue?.createdDateTime;
        this.createdUsing = unifiedRoleScheduleBaseParameterValue?.createdUsing;
        this.directoryScope = unifiedRoleScheduleBaseParameterValue?.directoryScope instanceof DirectoryObjectImpl? unifiedRoleScheduleBaseParameterValue?.directoryScope:new DirectoryObjectImpl(unifiedRoleScheduleBaseParameterValue?.directoryScope);
        this.directoryScopeId = unifiedRoleScheduleBaseParameterValue?.directoryScopeId;
        this.modifiedDateTime = unifiedRoleScheduleBaseParameterValue?.modifiedDateTime;
        this.principal = unifiedRoleScheduleBaseParameterValue?.principal instanceof DirectoryObjectImpl? unifiedRoleScheduleBaseParameterValue?.principal:new DirectoryObjectImpl(unifiedRoleScheduleBaseParameterValue?.principal);
        this.principalId = unifiedRoleScheduleBaseParameterValue?.principalId;
        this.roleDefinition = unifiedRoleScheduleBaseParameterValue?.roleDefinition instanceof UnifiedRoleDefinitionImpl? unifiedRoleScheduleBaseParameterValue?.roleDefinition:new UnifiedRoleDefinitionImpl(unifiedRoleScheduleBaseParameterValue?.roleDefinition);
        this.roleDefinitionId = unifiedRoleScheduleBaseParameterValue?.roleDefinitionId;
        this.status = unifiedRoleScheduleBaseParameterValue?.status;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appScope": n => { this.appScope = n.getObjectValue<AppScopeImpl>(createAppScopeFromDiscriminatorValue); },
            "appScopeId": n => { this.appScopeId = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "createdUsing": n => { this.createdUsing = n.getStringValue(); },
            "directoryScope": n => { this.directoryScope = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "directoryScopeId": n => { this.directoryScopeId = n.getStringValue(); },
            "modifiedDateTime": n => { this.modifiedDateTime = n.getDateValue(); },
            "principal": n => { this.principal = n.getObjectValue<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
            "principalId": n => { this.principalId = n.getStringValue(); },
            "roleDefinition": n => { this.roleDefinition = n.getObjectValue<UnifiedRoleDefinitionImpl>(createUnifiedRoleDefinitionFromDiscriminatorValue); },
            "roleDefinitionId": n => { this.roleDefinitionId = n.getStringValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appScope){
            writer.writeObjectValue<AppScopeImpl>("appScope", new AppScopeImpl(this.appScope));
        }
        if(this.appScopeId){
            writer.writeStringValue("appScopeId", this.appScopeId);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.createdUsing){
            writer.writeStringValue("createdUsing", this.createdUsing);
        }
        if(this.directoryScope){
            writer.writeObjectValue<DirectoryObjectImpl>("directoryScope", new DirectoryObjectImpl(this.directoryScope));
        }
        if(this.directoryScopeId){
            writer.writeStringValue("directoryScopeId", this.directoryScopeId);
        }
        if(this.modifiedDateTime){
            writer.writeDateValue("modifiedDateTime", this.modifiedDateTime);
        }
        if(this.principal){
            writer.writeObjectValue<DirectoryObjectImpl>("principal", new DirectoryObjectImpl(this.principal));
        }
        if(this.principalId){
            writer.writeStringValue("principalId", this.principalId);
        }
        if(this.roleDefinition){
            writer.writeObjectValue<UnifiedRoleDefinitionImpl>("roleDefinition", new UnifiedRoleDefinitionImpl(this.roleDefinition));
        }
        if(this.roleDefinitionId){
            writer.writeStringValue("roleDefinitionId", this.roleDefinitionId);
        }
        if(this.status){
            writer.writeStringValue("status", this.status);
        }
    };
}
