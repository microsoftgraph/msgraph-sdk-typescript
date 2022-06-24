import {RunAsAccountType} from './runAsAccountType';
import {Win32LobAppInstallExperience} from './win32LobAppInstallExperience';
import {Win32LobAppRestartBehavior} from './win32LobAppRestartBehavior';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Contains installation experience properties for a Win32 App */
export class Win32LobAppInstallExperienceImpl implements Win32LobAppInstallExperience {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Device restart behavior. Possible values are: basedOnReturnCode, allow, suppress, force. */
    public deviceRestartBehavior?: Win32LobAppRestartBehavior | undefined;
    /** Indicates the type of execution context the app runs in. Possible values are: system, user. */
    public runAsAccount?: RunAsAccountType | undefined;
    /**
     * Instantiates a new win32LobAppInstallExperience and sets the default values.
     * @param win32LobAppInstallExperienceParameterValue 
     */
    public constructor(win32LobAppInstallExperienceParameterValue?: Win32LobAppInstallExperience | undefined) {
        this.additionalData = win32LobAppInstallExperienceParameterValue?.additionalData ? win32LobAppInstallExperienceParameterValue?.additionalData! : {};
        this.deviceRestartBehavior = win32LobAppInstallExperienceParameterValue?.deviceRestartBehavior;
        this.runAsAccount = win32LobAppInstallExperienceParameterValue?.runAsAccount;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "deviceRestartBehavior": n => { this.deviceRestartBehavior = n.getEnumValue<Win32LobAppRestartBehavior>(Win32LobAppRestartBehavior); },
            "runAsAccount": n => { this.runAsAccount = n.getEnumValue<RunAsAccountType>(RunAsAccountType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.deviceRestartBehavior){
            writer.writeEnumValue<Win32LobAppRestartBehavior>("deviceRestartBehavior", this.deviceRestartBehavior);
        }
        if(this.runAsAccount){
            writer.writeEnumValue<RunAsAccountType>("runAsAccount", this.runAsAccount);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
