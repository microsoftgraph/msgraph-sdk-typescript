import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {EntitlementManagementSettings} from './entitlementManagementSettings';
import {EntityImpl} from './index';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class EntitlementManagementSettingsImpl extends EntityImpl implements EntitlementManagementSettings, Parsable {
    /** If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted. */
    public durationUntilExternalUserDeletedAfterBlocked?: Duration | undefined;
    /** One of None, BlockSignIn, or BlockSignInAndDelete. */
    public externalUserLifecycleAction?: AccessPackageExternalUserLifecycleAction | undefined;
    /**
     * Instantiates a new entitlementManagementSettings and sets the default values.
     * @param entitlementManagementSettingsParameterValue 
     */
    public constructor(entitlementManagementSettingsParameterValue?: EntitlementManagementSettings | undefined) {
        super();
        this.durationUntilExternalUserDeletedAfterBlocked = entitlementManagementSettingsParameterValue?.durationUntilExternalUserDeletedAfterBlocked ;
        this.externalUserLifecycleAction = entitlementManagementSettingsParameterValue?.externalUserLifecycleAction ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "durationUntilExternalUserDeletedAfterBlocked": n => { this.durationUntilExternalUserDeletedAfterBlocked = n.getDurationValue(); },
            "externalUserLifecycleAction": n => { this.externalUserLifecycleAction = n.getEnumValue<AccessPackageExternalUserLifecycleAction>(AccessPackageExternalUserLifecycleAction); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.durationUntilExternalUserDeletedAfterBlocked){
        writer.writeDurationValue("durationUntilExternalUserDeletedAfterBlocked", this.durationUntilExternalUserDeletedAfterBlocked);
        }
        if(this.externalUserLifecycleAction){
        writer.writeEnumValue<AccessPackageExternalUserLifecycleAction>("externalUserLifecycleAction", this.externalUserLifecycleAction);
        }
    };
}
