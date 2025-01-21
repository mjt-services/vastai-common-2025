export type VastAiInstance = {
    actual_status: string;
    bundle_id: number;
    bw_nvlink: number;
    client_run_time: number;
    compute_cap: number;
    cpu_arch: string;
    cpu_cores: number;
    cpu_cores_effective: number;
    cpu_name: string;
    cpu_ram: number;
    cpu_util: number;
    credit_balance: number | null;
    credit_discount: number | null;
    credit_discount_max: number;
    cuda_max_good: number;
    cur_state: string;
    direct_port_count: number;
    direct_port_end: number;
    direct_port_start: number;
    disk_bw: number;
    disk_name: string;
    disk_space: number;
    disk_usage: number;
    disk_util: number;
    dlperf: number;
    dlperf_per_dphtotal: number;
    dph_base: number;
    dph_total: number;
    driver_version: string;
    duration: number;
    end_date: number;
    external: boolean;
    extra_env: Record<string, unknown>;
    flops_per_dphtotal: number;
    geolocation: string;
    gpu_arch: string;
    gpu_display_active: boolean;
    gpu_frac: number;
    gpu_lanes: number;
    gpu_mem_bw: number;
    gpu_name: string;
    gpu_ram: number;
    gpu_temp: number;
    gpu_totalram: number;
    gpu_util: number;
    has_avx: number;
    host_id: number;
    host_run_time: number;
    hosting_type: number;
    id: number;
    image_args: string[];
    image_runtype: string;
    image_uuid: string;
    inet_down: number;
    inet_down_billed: number;
    inet_down_cost: number;
    inet_up: number;
    inet_up_billed: number;
    inet_up_cost: number;
    instance: {
        discountTotalHour: number;
        discountedTotalPerHour: number;
        diskHour: number;
        gpuCostPerHour: number;
        totalHour: number;
    };
    intended_status: string;
    internet_down_cost_per_tb: number;
    internet_up_cost_per_tb: number;
    is_bid: boolean;
    jupyter_token: string;
    label: string | null;
    local_ipaddrs: string;
    logo: string;
    machine_dir_ssh_port: number;
    machine_id: number;
    mem_limit: number;
    mem_usage: number;
    min_bid: number;
    mobo_name: string;
    next_state: string;
    num_gpus: number;
    onstart: string;
    os_version: string;
    pci_gen: number;
    pcie_bw: number;
    ports: Record<string, {
        HostIp: string;
        HostPort: string;
    }[]>;
    public_ipaddr: string;
    reliability2: number;
    rentable: boolean;
    score: number;
    search: {
        discountTotalHour: number;
        discountedTotalPerHour: number;
        diskHour: number;
        gpuCostPerHour: number;
        totalHour: number;
    };
    ssh_host: string;
    ssh_idx: string;
    ssh_port: number;
    start_date: number;
    static_ip: boolean;
    status_msg: string;
    storage_cost: number;
    storage_total_cost: number;
    template_hash_id: string;
    template_id: number;
    template_name: string;
    time_remaining: string;
    time_remaining_isbid: string;
    total_flops: number;
    uptime_mins: number | null;
    verification: string;
    vmem_usage: number;
    vram_costperhour: number;
    webpage: string | null;
};
