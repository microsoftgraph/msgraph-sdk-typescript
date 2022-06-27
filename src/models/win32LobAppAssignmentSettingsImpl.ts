import {createMobileAppInstallTimeSettingsFromDiscriminatorValue} from './createMobileAppInstallTimeSettingsFromDiscriminatorValue';
import {createWin32LobAppRestartSettingsFromDiscriminatorValue} from './createWin32LobAppRestartSettingsFromDiscriminatorValue';
import {MobileAppAssignmentSettingsImpl, MobileAppInstallTimeSettingsImpl, Win32LobAppRestartSettingsImpl} from './index';
import {MobileAppInstallTimeSettings} from './mobileAppInstallTimeSettings';
import {Win32LobAppAssignmentSettings} from './win32LobAppAssignmentSettings';
import {Win32LobAppDeliveryOptimizationPriority} from './win32LobAppDeliveryOptimizationPriority';
import {Win32LobAppNotification} from './win32LobAppNotification';
import {Win32LobAppRestartSettings} from './win32LobAppRestartSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Win32LobAppAssignmentSettingsImpl extends MobileAppAssignmentSettingsImpl implements Win32LobAppAssignmentSettings {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The delivery optimization priority for this app assignment. This setting is not supported in National Cloud environments. Possible values are: notConfigured, foreground. */
    public deliveryOptimizationPriority?: Win32LobAppDeliveryOptimizationPriority | undefined;
    /** The install time settings to apply for this app assignment. */
    public installTimeSettings?: MobileAppInstallTimeSettings | undefined;
    /** The notification status for this app assignment. Possible values are: showAll, showReboot, hideAll. */
    public notifications?: Win32LobAppNotification | undefined;
    /** The reboot settings to apply for this app assignment. */
    public restartSettings?: Win32LobAppRestartSettings | undefined;
    /**
     * Instantiates a new Win32LobAppAssignmentSettings and sets the default values.
     * @param win32LobAppAssignmentSettingsParameterValue 
     */
    public constructor(win32LobAppAssignmentSettingsParameterValue?: Win32LobAppAssignmentSettings | undefined) {
        super(win32LobAppAssignmentSettingsParameterValue);
        this.additionalData = win32LobAppAssignmentSettingsParameterValue?.additionalData ? win32LobAppAssignmentSettingsParameterValue?.additionalData! : {};
        this.deliveryOptimizationPriority = win32LobAppAssignmentSettingsParameterValue?.deliveryOptimizationPriority;
        this.installTimeSettings = win32LobAppAssignmentSettingsParameterValue?.installTimeSettings instanceof MobileAppInstallTimeSettingsImpl? win32LobAppAssignmentSettingsParameterValue?.installTimeSettings:new MobileAppInstallTimeSettingsImpl(win32LobAppAssignmentSettingsParameterValue?.installTimeSettings);
        this.notifications = win32LobAppAssignmentSettingsParameterValue?.notifications;
        this.restartSettings = win32LobAppAssignmentSettingsParameterValue?.restartSettings instanceof Win32LobAppRestartSettingsImpl? win32LobAppAssignmentSettingsParameterValue?.restartSettings:new Win32LobAppRestartSettingsImpl(win32LobAppAssignmentSettingsParameterValue?.restartSettings);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "deliveryOptimizationPriority": n => { this.deliveryOptimizationPriority = n.getEnumValue<Win32LobAppDeliveryOptimizationPriority>(Win32LobAppDeliveryOptimizationPriority); },
            "installTimeSettings": n => { this.installTimeSettings = n.getObjectValue<MobileAppInstallTimeSettingsImpl>(createMobileAppInstallTimeSettingsFromDiscriminatorValue); },
            "notifications": n => { this.notifications = n.getEnumValue<Win32LobAppNotification>(Win32LobAppNotification); },
            "restartSettings": n => { this.restartSettings = n.getObjectValue<Win32LobAppRestartSettingsImpl>(createWin32LobAppRestartSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.deliveryOptimizationPriority){
            writer.writeEnumValue<Win32LobAppDeliveryOptimizationPriority>("deliveryOptimizationPriority", this.deliveryOptimizationPriority);
        }
        if(this.installTimeSettings){
            writer.writeObjectValue<MobileAppInstallTimeSettingsImpl>("installTimeSettings", new MobileAppInstallTimeSettingsImpl(this.installTimeSettings));
        }
        if(this.notifications){
            writer.writeEnumValue<Win32LobAppNotification>("notifications", this.notifications);
        }
        if(this.restartSettings){
            writer.writeObjectValue<Win32LobAppRestartSettingsImpl>("restartSettings", new Win32LobAppRestartSettingsImpl(this.restartSettings));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
