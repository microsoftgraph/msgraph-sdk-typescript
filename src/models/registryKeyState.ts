import {RegistryHive} from './registryHive';
import {RegistryOperation} from './registryOperation';
import {RegistryValueType} from './registryValueType';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RegistryKeyState extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A Windows registry hive : HKEYCURRENTCONFIG HKEYCURRENTUSER HKEYLOCALMACHINE/SAM HKEYLOCALMACHINE/Security HKEYLOCALMACHINE/Software HKEYLOCALMACHINE/System HKEY_USERS/.Default. Possible values are: unknown, currentConfig, currentUser, localMachineSam, localMachineSecurity, localMachineSoftware, localMachineSystem, usersDefault.
     */
    hive?: RegistryHive | undefined;
    /**
     * Current (i.e. changed) registry key (excludes HIVE).
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Previous (i.e. before changed) registry key (excludes HIVE).
     */
    oldKey?: string | undefined;
    /**
     * Previous (i.e. before changed) registry key value data (contents).
     */
    oldValueData?: string | undefined;
    /**
     * Previous (i.e. before changed) registry key value name.
     */
    oldValueName?: string | undefined;
    /**
     * Operation that changed the registry key name and/or value. Possible values are: unknown, create, modify, delete.
     */
    operation?: RegistryOperation | undefined;
    /**
     * Process ID (PID) of the process that modified the registry key (process details will appear in the alert 'processes' collection).
     */
    processId?: number | undefined;
    /**
     * Current (i.e. changed) registry key value data (contents).
     */
    valueData?: string | undefined;
    /**
     * Current (i.e. changed) registry key value name
     */
    valueName?: string | undefined;
    /**
     * Registry key value type REGBINARY REGDWORD REGDWORDLITTLEENDIAN REGDWORDBIGENDIANREGEXPANDSZ REGLINK REGMULTISZ REGNONE REGQWORD REGQWORDLITTLEENDIAN REG_SZ Possible values are: unknown, binary, dword, dwordLittleEndian, dwordBigEndian, expandSz, link, multiSz, none, qword, qwordlittleEndian, sz.
     */
    valueType?: RegistryValueType | undefined;
}
