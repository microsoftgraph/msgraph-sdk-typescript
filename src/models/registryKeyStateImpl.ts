import {RegistryHive} from './registryHive';
import {RegistryKeyState} from './registryKeyState';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RegistryKeyStateImpl implements AdditionalDataHolder, Parsable, RegistryKeyState {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** A Windows registry hive : HKEY_CURRENT_CONFIG HKEY_CURRENT_USER HKEY_LOCAL_MACHINE/SAM HKEY_LOCAL_MACHINE/Security HKEY_LOCAL_MACHINE/Software HKEY_LOCAL_MACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault. */
    public hive?: RegistryHive | undefined;
    /** Current (i.e. changed) registry key (excludes HIVE). */
    public key?: string | undefined;
    /** Previous (i.e. before changed) registry key (excludes HIVE). */
    public oldKey?: string | undefined;
    /** Previous (i.e. before changed) registry key value data (contents). */
    public oldValueData?: string | undefined;
    /** Previous (i.e. before changed) registry key value name. */
    public oldValueName?: string | undefined;
    /** Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete. */
    public operation?: RegistryOperation | undefined;
    /** Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection). */
    public processId?: number | undefined;
    /** Current (i.e. changed) registry key value data (contents). */
    public valueData?: string | undefined;
    /** Current (i.e. changed) registry key value name */
    public valueName?: string | undefined;
    /** Registry key value type REG_BINARY REG_DWORD REG_DWORD_LITTLE_ENDIAN REG_DWORD_BIG_ENDIANREG_EXPAND_SZ REG_LINK REG_MULTI_SZ REG_NONE REG_QWORD REG_QWORD_LITTLE_ENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz. */
    public valueType?: RegistryValueType | undefined;
    /**
     * Instantiates a new registryKeyState and sets the default values.
     * @param registryKeyStateParameterValue 
     */
    public constructor(registryKeyStateParameterValue?: RegistryKeyState | undefined) {
        this.additionalData = registryKeyStateParameterValue?.additionalData ? registryKeyStateParameterValue?.additionalData! : {}
        this.hive = registryKeyStateParameterValue?.hive ;
        this.key = registryKeyStateParameterValue?.key ;
        this.oldKey = registryKeyStateParameterValue?.oldKey ;
        this.oldValueData = registryKeyStateParameterValue?.oldValueData ;
        this.oldValueName = registryKeyStateParameterValue?.oldValueName ;
        this.operation = registryKeyStateParameterValue?.operation ;
        this.processId = registryKeyStateParameterValue?.processId ;
        this.valueData = registryKeyStateParameterValue?.valueData ;
        this.valueName = registryKeyStateParameterValue?.valueName ;
        this.valueType = registryKeyStateParameterValue?.valueType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hive": n => { this.hive = n.getEnumValue<RegistryHive>(RegistryHive); },
            "key": n => { this.key = n.getStringValue(); },
            "oldKey": n => { this.oldKey = n.getStringValue(); },
            "oldValueData": n => { this.oldValueData = n.getStringValue(); },
            "oldValueName": n => { this.oldValueName = n.getStringValue(); },
            "operation": n => { this.operation = n.getEnumValue<RegistryOperation>(RegistryOperation); },
            "processId": n => { this.processId = n.getNumberValue(); },
            "valueData": n => { this.valueData = n.getStringValue(); },
            "valueName": n => { this.valueName = n.getStringValue(); },
            "valueType": n => { this.valueType = n.getEnumValue<RegistryValueType>(RegistryValueType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hive){
        writer.writeEnumValue<RegistryHive>("hive", this.hive);
        }
        if(this.key){
        writer.writeStringValue("key", this.key);
        }
        if(this.oldKey){
        writer.writeStringValue("oldKey", this.oldKey);
        }
        if(this.oldValueData){
        writer.writeStringValue("oldValueData", this.oldValueData);
        }
        if(this.oldValueName){
        writer.writeStringValue("oldValueName", this.oldValueName);
        }
        if(this.operation){
        writer.writeEnumValue<RegistryOperation>("operation", this.operation);
        }
        if(this.processId){
        writer.writeNumberValue("processId", this.processId);
        }
        if(this.valueData){
        writer.writeStringValue("valueData", this.valueData);
        }
        if(this.valueName){
        writer.writeStringValue("valueName", this.valueName);
        }
        if(this.valueType){
        writer.writeEnumValue<RegistryValueType>("valueType", this.valueType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
