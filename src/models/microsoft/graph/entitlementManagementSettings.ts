import {AccessPackageExternalUserLifecycleAction} from './accessPackageExternalUserLifecycleAction';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EntitlementManagementSettings extends Entity implements Parsable {
    /** If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted.  */
    private _durationUntilExternalUserDeletedAfterBlocked?: string | undefined;
    /** One of None, BlockSignIn, or BlockSignInAndDelete.  */
    private _externalUserLifecycleAction?: AccessPackageExternalUserLifecycleAction | undefined;
    /**
     * Instantiates a new entitlementManagementSettings and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the durationUntilExternalUserDeletedAfterBlocked property value. If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted.
     * @returns a string
     */
    public get durationUntilExternalUserDeletedAfterBlocked() {
        return this._durationUntilExternalUserDeletedAfterBlocked;
    };
    /**
     * Gets the externalUserLifecycleAction property value. One of None, BlockSignIn, or BlockSignInAndDelete.
     * @returns a accessPackageExternalUserLifecycleAction
     */
    public get externalUserLifecycleAction() {
        return this._externalUserLifecycleAction;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["durationUntilExternalUserDeletedAfterBlocked", (o, n) => { (o as unknown as EntitlementManagementSettings).durationUntilExternalUserDeletedAfterBlocked = n.getStringValue(); }],
            ["externalUserLifecycleAction", (o, n) => { (o as unknown as EntitlementManagementSettings).externalUserLifecycleAction = n.getEnumValue<AccessPackageExternalUserLifecycleAction>(AccessPackageExternalUserLifecycleAction); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("durationUntilExternalUserDeletedAfterBlocked", this.durationUntilExternalUserDeletedAfterBlocked);
        writer.writeEnumValue<AccessPackageExternalUserLifecycleAction>("externalUserLifecycleAction", this.externalUserLifecycleAction);
    };
    /**
     * Sets the durationUntilExternalUserDeletedAfterBlocked property value. If externalUserLifecycleAction is blockSignInAndDelete, the duration, typically a number of days, after an external user is blocked from sign in before their account is deleted.
     * @param value Value to set for the durationUntilExternalUserDeletedAfterBlocked property.
     */
    public set durationUntilExternalUserDeletedAfterBlocked(value: string | undefined) {
        this._durationUntilExternalUserDeletedAfterBlocked = value;
    };
    /**
     * Sets the externalUserLifecycleAction property value. One of None, BlockSignIn, or BlockSignInAndDelete.
     * @param value Value to set for the externalUserLifecycleAction property.
     */
    public set externalUserLifecycleAction(value: AccessPackageExternalUserLifecycleAction | undefined) {
        this._externalUserLifecycleAction = value;
    };
}
